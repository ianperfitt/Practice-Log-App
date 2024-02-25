package com.example.springbootpracticelogs.practicelogs.practiceLog.dto;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class PracticeLogDto {

    private UUID id;

    @NotNull(message = "First Name is required")
    private String firstName;
    private String lastName;
    private String house;
    private String knownAs;

    @Override
    public String toString() {

        return id + " " + firstName + " " + lastName + " " + house + " " + knownAs;
    }


}
