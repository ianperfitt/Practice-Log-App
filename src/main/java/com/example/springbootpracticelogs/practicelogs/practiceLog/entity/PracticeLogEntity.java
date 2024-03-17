package com.example.springbootpracticelogs.practicelogs.practiceLog.entity;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
//@RedisHash("AntiHero")
public class PracticeLogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "UUID")
    @Column(nullable = false, updatable = false)
    private UUID id;

    @NotNull(message = "Instrument is required")
    private String instrument;

    private String key;

    private String tempo;

    private String description;

    private String createdAt = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z").format(new Date());


}
