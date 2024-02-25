package com.example.springbootpracticelogs.practicelogs.jwt.model;

import com.example.springbootpracticelogs.practicelogs.user.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@AllArgsConstructor
public class UserPrincipal implements UserDetails {

    private final UserEntity userEntity;

    //retrieves list of authorizations of the user
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.userEntity.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    //checks whether the user is locked
    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    //validates that the user is valid and not yet expired
    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    //checks whether user is active
    @Override
    public boolean isEnabled() {
        return false;
    }
}
