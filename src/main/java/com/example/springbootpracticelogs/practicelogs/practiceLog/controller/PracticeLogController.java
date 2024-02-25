package com.example.springbootpracticelogs.practicelogs.practiceLog.controller;

import com.example.springbootpracticelogs.practicelogs.practiceLog.dto.PracticeLogDto;

import javax.validation.Valid;

import com.example.springbootpracticelogs.practicelogs.practiceLog.entity.PracticeLogEntity;
import com.example.springbootpracticelogs.practicelogs.practiceLog.service.PracticeLogService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/practice-logs")
@PreAuthorize("isAuthenticated")
public class PracticeLogController {

    private final PracticeLogService service;
    private final ModelMapper mapper;

    @GetMapping("/{id}")
    public PracticeLogDto getPracticeLogById(@PathVariable("id") UUID id) {
        return convertToDto(service.findPracticeLogById(id));
    }

    @PostMapping
    public PracticeLogDto postPracticeLog(@Valid @RequestBody PracticeLogDto practiceLogDto) {
        var entity = convertToEntity(practiceLogDto);
        var practiceLog = service.addPracticeLog(entity);
        return convertToDto(practiceLog);
    }

    @PutMapping("/{id}")
    public void putPracticeLog(
            @PathVariable("id") UUID id,
            @Valid @RequestBody PracticeLogDto practiceLogDto) {
        if (!id.equals(practiceLogDto.getId())) throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "id does not match."
        );
        var practiceLogEntity = convertToEntity(practiceLogDto);
        service.updatePracticeLog(id, practiceLogEntity);
    }

    @DeleteMapping("/{id}")
    public void deletePracticeLogById(@PathVariable("id") UUID id) {
        service.removePracticeLogById(id);
    }

    @GetMapping
    public List<PracticeLogDto> getPracticeLogs(Pageable pageable) {

        int toSkip = pageable.getPageSize() * pageable.getPageNumber();
        log.info("Using SLF4J: Getting practice log list - getPracticeLogs");
        var practiceLogList = StreamSupport
                .stream(service.findAllPracticeLogs().spliterator(), false)
                .skip(toSkip).limit(pageable.getPageSize())
                .collect(Collectors.toList());
        return practiceLogList
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private PracticeLogDto convertToDto(PracticeLogEntity entity) {

        return mapper.map(entity, PracticeLogDto.class);
    }

    private PracticeLogEntity convertToEntity(PracticeLogDto dto) {
        return mapper.map(dto, PracticeLogEntity.class);
    }
}
