float CastRay(Ray &ray, Payload &payload)
 {
 	IntersectInfo info;
 	if (CheckIntersection(ray, info))
 	{
 		//create final values initially set to zero for RGB
 		glm::vec3 ambient = glm::vec3(0.0f);
 		glm::vec3 diffuse = glm::vec3(0.0f);
 		glm::vec3 specular = glm::vec3(0.0f);

 		for (int i = 0; i < lightSources.size(); i++)
 		{
 			//Pull out variables
 			glm::vec3 hitToLight = lightSources[i]->position - info.hitPoint;
 			glm::vec3 shadowOrigin = info.hitPoint + info.normal * 1e-3f;
 			glm::vec3 shadowDirection = glm::normalize(hitToLight);

		//Create our necessary shadow check information
 			Ray shadowCheck(shadowOrigin, shadowDirection);
 			IntersectInfo infoShadow;
 			//initialise boolean to false
 			bool isInShadow = false;
 			/*Check intersect on the shadow information and set true if it
 			 returns true and shadow info's time is less than length from the hitpoint
 			 to the light*/
 			if (CheckIntersection(shadowCheck, infoShadow)){
 				if (infoShadow.time < glm::length(hitToLight)) {
 					isInShadow = true;
 				}
 			}
	//Normalisation done here as if done before check can create errors as it is set to 1.
 			hitToLight = glm::normalize(hitToLight);
 			//Ambient calc and added to Initial Ambient value.
 			glm::vec3 ambientVal = info.material->ambient;
 			glm::vec3 lightIntensity = lightSources[i]->intensity;
 			glm::vec3 ambientCalc = ambientVal*lightIntensity;

 			ambient += ambientCalc;
			//If not in shadow
 			if (!isInShadow) { 				//Calculate Diffuse and Spec
 				glm::vec3 diffuseVal = info.material->diffuse;
 				glm::vec3 specularVal = info.material->specular;
 				float specExp = info.material->specularExponent;
 				glm::vec3 normalOnHit = glm::normalize(info.normal);
 				glm::vec3 hitToCam = glm::normalize(ray.origin - info.hitPoint);
 				glm::vec3 viewReflect = glm::normalize(glm::reflect(-hitToCam, normalOnHit));
 				glm::vec3 lightReflect = glm::normalize(glm::reflect(-hitToLight,normalOnHit));

 				glm::vec3 diffuseCalc = (diffuseVal*glm::dot(hitToLight,normalOnHit)*lightIntensity);
 				glm::vec3 specularCalc = (specularVal*pow(glm::dot(lightReflect,hitToCam),specExp)*lightIntensity);
				//Only add calculated values if the cosTheta and cosAlpha are positive
 				if (glm::dot(hitToLight,normalOnHit) > 0.0f) {
 					diffuse += diffuseCalc;
 				}
 				if (glm::dot(lightReflect, hitToCam) > 0.0f){
 					specular += specularCalc;
 				}
 			}

		}
 		//Initial reflection colour
 		glm::vec3 reflectionRay = glm::vec3(0.0f);
 		//Check material is reflective and we are within bounce count
 		if (info.material->reflection != glm::vec3(0.0f) && payload.numBounces < recursionDepth) {
 			glm::vec3 camToHit = ray.direction;
 			glm::vec3 reflectionView = glm::reflect(camToHit, info.normal);
 			Ray reflectionCheck(info.hitPoint + info.normal*1e-3f, reflectionView);

 			Payload reflectPayload;
 			reflectPayload.numBounces = payload.numBounces +1 ;
 			if (CastRay(reflectionCheck, reflectPayload)> 0.0f) {
 				reflectionRay = info.material->reflection * reflectPayload.color;
 			}
 		}
 		//Update our Pixel Colour
 		payload.color += ambient + diffuse + specular + reflectionRay ;

 		return info.time;
 	}

 	return 0.0f;
 }