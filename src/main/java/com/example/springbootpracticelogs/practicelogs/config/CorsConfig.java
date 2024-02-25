package com.example.springbootpracticelogs.practicelogs.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.beans.factory.annotation.Value;

//global CORS configuration
@Configuration
public class CorsConfig {

    @Value("${app.clienturl}")
    private String CLIENT_URL;

    //CORS settings
    @Bean
    CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        //browser must send cookies or CSRF tokens
         corsConfiguration.setAllowCredentials(true);
        //permitted origins
         corsConfiguration.setAllowedOrigins(Arrays.asList(CLIENT_URL));
         //permitted HTTP request headers
         corsConfiguration.setAllowedHeaders(
                 Arrays.asList(
                         "Origin",
                         "Access-Control-Allow-Origin",
                         "Content-Type",
                         "Accept",
                         "Authorization",
                         "Origin, Accept",
                         "X-Requested-With",
                         "Access-Control-Request-Method",
                         "Access-Control-Request-Headers"
                 )
         );
         //specify list of server response headers
        corsConfiguration.setExposedHeaders(
                Arrays.asList(
                        "Origin",
                        "Content-Type",
                        "Accept",
                        "Authorization",
                        "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Credentials"
                )
        );
        //authorized HTTP request methods
        corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST","PUT", "DELETE", "OPTIONS"));
        //register CORS config
        var urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(urlBasedCorsConfigurationSource);
    }
}
