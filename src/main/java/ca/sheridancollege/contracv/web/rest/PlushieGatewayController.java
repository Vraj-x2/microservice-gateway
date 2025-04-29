package ca.sheridancollege.contracv.web.rest;

import ca.sheridancollege.contracv.domain.Plushie;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/plushies")
public class PlushieGatewayController {

    private final String BASE_URL = "http://localhost:8082/api/plushies";

    @GetMapping
    public List<Plushie> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        return Arrays.asList(restTemplate.getForObject(BASE_URL, Plushie[].class));
    }

    @GetMapping("/{id}")
    public Plushie getById(@PathVariable Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(BASE_URL + "/" + id, Plushie.class);
    }

    @PostMapping
    public Plushie create(@RequestBody Plushie plushie) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(BASE_URL, plushie, Plushie.class);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Plushie plushie) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put(BASE_URL + "/" + id, plushie);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(BASE_URL + "/" + id);
    }
}
