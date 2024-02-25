package com.example.springbootpracticelogs.practicelogs.practiceLog.h2.service;

import com.example.springbootpracticelogs.practicelogs.practiceLog.entity.PracticeLogEntity;
import com.example.springbootpracticelogs.practicelogs.exception.NotFoundException;
import com.example.springbootpracticelogs.practicelogs.practiceLog.repository.PracticeLogRepository;
import com.example.springbootpracticelogs.practicelogs.practiceLog.service.PracticeLogService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DataJpaTest
public class PracticeLogH2ServiceTest {

    @Autowired
    private PracticeLogRepository repo;
    private PracticeLogService service;

    PracticeLogEntity practiceLog = new PracticeLogEntity();

    @BeforeEach
    public void setup() {
        service = new PracticeLogService(repo);
    }

    @Test
    public void shouldFindAllPracticeLog() {
        PracticeLogEntity practiceLog = new PracticeLogEntity();
        practiceLog.setFirstName("Eddie");
        practiceLog.setLastName("Brock");
        practiceLog.setHouse("MCU");
        service.addPracticeLog(practiceLog);
        Iterable<PracticeLogEntity> practiceLogList = service.findAllPracticeLogs();
        PracticeLogEntity savedPracticeLog = practiceLogList.iterator().next();
        assertThat(savedPracticeLog).isNotNull();
    }

    @Test
    public void shouldAddAntiHero() {
        PracticeLogEntity practiceLog = new PracticeLogEntity();
        practiceLog.setFirstName("Eddie");
        practiceLog.setLastName("Brock");
        practiceLog.setHouse("MCU");
        service.addPracticeLog(practiceLog);
        Iterable<PracticeLogEntity> antiHeroList = service.findAllPracticeLogs();
        PracticeLogEntity savedPracticeLog = antiHeroList.iterator().next();
        assertThat(practiceLog).isEqualTo(savedPracticeLog);
    }

    @Test
    public void shouldUpdateAntiHero() {
        PracticeLogEntity practiceLog = new PracticeLogEntity();
        practiceLog.setFirstName("Eddie");
        practiceLog.setLastName("Brock");
        practiceLog.setHouse("MCU");
        PracticeLogEntity savedPracticeLog = service.addPracticeLog(practiceLog);
        savedPracticeLog.setHouse("San Francisco");
        service.updatePracticeLog(savedPracticeLog.getId(), savedPracticeLog);
        PracticeLogEntity foundPracticeLog = service.findPracticeLogById(savedPracticeLog.getId());
        assertThat(foundPracticeLog.getHouse()).isEqualTo("San Francisco");
    }

    @Test
    public void shouldDeleteAntiHero() {
        assertThrows(NotFoundException.class, new Executable() {
            @Override
            public void execute() throws Throwable {
                PracticeLogEntity savedAntiHero = service.addPracticeLog(practiceLog);

                service.removePracticeLogById(savedAntiHero.getId());
                PracticeLogEntity foundAntiHero = service.findPracticeLogById(savedAntiHero.getId());

                assertThat(foundAntiHero).isNull();
            }
        });
    }
}
