package com.example.springbootpracticelogs.practicelogs.practiceLog.service;

import com.example.springbootpracticelogs.practicelogs.practiceLog.entity.PracticeLogEntity;
import com.example.springbootpracticelogs.practicelogs.exception.NotFoundException;
import com.example.springbootpracticelogs.practicelogs.practiceLog.repository.PracticeLogRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class PracticeLogService {

    private final PracticeLogRepository repo;

    public Iterable<PracticeLogEntity> findAllPracticeLogs() {
        return repo.findAll();
    }

    public PracticeLogEntity findPracticeLogById(UUID id) {
        return findOrThrow(id);
    }

    public void removePracticeLogById(UUID id) {
        repo.deleteById(id);
    }

    public PracticeLogEntity addPracticeLog(PracticeLogEntity practiceLog) {
        return repo.save(practiceLog);
    }

    public void updatePracticeLog(UUID id, PracticeLogEntity practiceLog) {
        findOrThrow(id);
        repo.save(practiceLog);
    }

    private PracticeLogEntity findOrThrow(final UUID id)  {
        return repo
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException("Practice-log by  id " + id + " was not found")
                );
    }
}
