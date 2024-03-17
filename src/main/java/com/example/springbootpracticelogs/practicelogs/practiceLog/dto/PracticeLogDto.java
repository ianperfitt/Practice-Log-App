package com.example.springbootpracticelogs.practicelogs.practiceLog.dto;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class PracticeLogDto {

    private UUID id;

    @NotNull(message = "Instrument is required")
    private String instrument;
    private String key;
    private String tempo;
    private String description;

    @Override
    public String toString() {

        return id + " " + instrument + " " + key + " " + tempo + " " + description;
    }


}
