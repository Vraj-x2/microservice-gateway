package ca.sheridancollege.contracv.domain;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plushie {
    private Long id;
    private String name;
    private double price;
    private int quantity;
    private String employeeName;
}
