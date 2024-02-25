package com.example.springbootpracticelogs.practicelogs.practiceLog.service;

import com.example.springbootpracticelogs.practicelogs.practiceLog.entity.PracticeLogEntity;
import com.example.springbootpracticelogs.practicelogs.practiceLog.repository.PracticeLogRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class PracticeLogServiceTest {

    @Mock
    private PracticeLogRepository practiceLogRepository;

    @InjectMocks
    private PracticeLogService underTest;

    @Test
    void canFindAllPracticeLogs() {
        // when
        underTest.findAllPracticeLogs();
        // then
        verify(practiceLogRepository).findAll();
    }

    @Test
    void canAddPracticeLog() {
        PracticeLogEntity practiceLog = new PracticeLogEntity(
                UUID.randomUUID(),
                "Bunao",
                "Lakandula",
                "Tondo",
                "Datu of Tondo",
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z").format(new Date())
        );
        //when
        underTest.addPracticeLog(practiceLog);
        //then
        ArgumentCaptor<PracticeLogEntity> practiceLogDtoArgumentCaptor = ArgumentCaptor.forClass(
                PracticeLogEntity.class
        );
        verify(practiceLogRepository).save(practiceLogDtoArgumentCaptor.capture());
        PracticeLogEntity capturedPracticeLog = practiceLogDtoArgumentCaptor.getValue();
        assertThat(capturedPracticeLog).isEqualTo(practiceLog);
    }
}
