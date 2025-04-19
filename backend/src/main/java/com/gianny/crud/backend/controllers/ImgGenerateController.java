package com.gianny.crud.backend.controllers;

import com.gianny.crud.backend.services.ImgGenerateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping(value = ImgGenerateController.REQUEST_MAPPING_NAME, produces = "application/json; charset=UTF-8")
public class ImgGenerateController {

    private final ImgGenerateService service;
    public static final String REQUEST_MAPPING_NAME = "/api/v1/imgs";


    @GetMapping
    public ResponseEntity<Map<String, String>> getVehicleImage(@RequestParam String prompt) {
        log.info("Controller triggered with prompt: {}", prompt);
        try {
            String imageUrl = service.searchImageFromPexels(prompt);
            return ResponseEntity.ok(Map.of("url", imageUrl));
        } catch (Exception e) {
            log.error("Error while generating image", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Internal server error"));
        }
    }

}
