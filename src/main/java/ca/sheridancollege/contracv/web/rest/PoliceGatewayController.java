package ca.sheridancollege.contracv.web.rest;

import ca.sheridancollege.contracv.domain.Police;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/police")
public class PoliceGatewayController {

    private final String BASE_URL = "http://localhost:8081/api/police";

    @GetMapping
    public List<Police> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        return Arrays.asList(restTemplate.getForObject(BASE_URL, Police[].class));
    }

    @GetMapping("/{id}")
    public Police getById(@PathVariable Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(BASE_URL + "/" + id, Police.class);
    }

    @PostMapping
    public Police create(@RequestBody Police police) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(BASE_URL, police, Police.class);
    }
}
