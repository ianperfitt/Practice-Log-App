package com.example.springbootpracticelogs.practicelogs.practiceLog.repository;

import com.example.springbootpracticelogs.practicelogs.practiceLog.entity.PracticeLogEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface PracticeLogRepository extends CrudRepository<PracticeLogEntity, UUID> {
}
