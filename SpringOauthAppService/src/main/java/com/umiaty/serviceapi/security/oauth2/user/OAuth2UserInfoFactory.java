package com.umiaty.serviceapi.security.oauth2.user;

import java.util.Map;

import com.umiaty.serviceapi.exception.OAuth2AuthenticationProcessingException;
import com.umiaty.serviceapi.model.AuthProvider;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        }  else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}