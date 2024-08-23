package com.Jiahai.SpringBootLibrary.config;

import java.awt.print.Book;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.Jiahai.SpringBootLibrary.Entity.Review;

/**
 * MyDataRestConfig
 */
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer
{
    private String theAllowedOrigins = "http://localhost:3000";
    
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, 
                                                         CorsRegistry cors)
    {
        HttpMethod[] theUnsupportedAction = {HttpMethod.POST,
                                             HttpMethod.PATCH,
                                             HttpMethod.DELETE,
                                             HttpMethod.PUT};

        config.exposeIdsFor(Book.class);
        config.exposeIdsFor(Review.class);

        disableHttpMethod(Book.class, config, theUnsupportedAction);
        disableHttpMethod(Review.class, config, theUnsupportedAction);
        
        cors.addMapping(config.getBasePath() + "/**").allowedOrigins(theAllowedOrigins);


    }

    private void disableHttpMethod(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions)
    {
        config.getExposureConfiguration().forDomainType(theClass).withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions)).withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }

}