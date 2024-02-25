package com.example.springbootpracticelogs.practicelogs.user.repository;

import com.example.springbootpracticelogs.practicelogs.user.entity.UserEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRepository underTest;

    @Test
    void itShouldCheckWhenUserEmailExists() {
        String email = "seiji@gmail.com";
        UserEntity user = new UserEntity(email, "21398732478");
        underTest.save(user);
        boolean expected = underTest.selectExistsEmail(email);
        assertThat(expected).isTrue();
    }

    @Test
    void itShouldFindUserWhenEmailExists() {
        String email = "dennis@gmail.com";
        UserEntity user = new UserEntity(email, "21398732478");
        underTest.save(user);
        UserEntity expected = underTest.findByEmail(email);
        assertThat(expected).isEqualTo(user);
    }
}
