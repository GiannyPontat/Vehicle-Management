package com.gianny.crud.backend.services.impl;

import com.gianny.crud.backend.services.ImgGenerateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@Service
public class ImgGenerateServiceImpl implements ImgGenerateService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${pexels.api.key}")
    private String pexelsApiKey;

    public String searchImageFromPexels(String query) {
        try {
            String url = "https://api.pexels.com/v1/search?query=" + URLEncoder.encode(query, StandardCharsets.UTF_8) + "&per_page=1";

            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", pexelsApiKey); // 🔁 Remplace par ta clé API Pexels

            HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

            ResponseEntity<Map> response = restTemplate.exchange(
                    url,
                    HttpMethod.GET,
                    requestEntity,
                    Map.class
            );

            List<Map<String, Object>> photos = (List<Map<String, Object>>) response.getBody().get("photos");
            if (photos != null && !photos.isEmpty()) {
                Map<String, Object> photo = photos.get(0);
                Map<String, String> src = (Map<String, String>) photo.get("src");
                return src.get("medium"); // ou "medium", "large" selon ton besoin
            } else {
                throw new RuntimeException("No image found for query: " + query);
            }

        } catch (Exception e) {
            log.error("Erreur pendant l'appel à l'API Pexels", e);
            throw new RuntimeException("Impossible de récupérer une image", e);
        }
    }
}
