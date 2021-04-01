package com.kangwonkyung.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequestMapping("/items")
@RequiredArgsConstructor
@RestController
public class ItemController {
    private final ItemService service;
    @PostMapping("")
    public ResponseEntity<String> save(@RequestBody Item item){
        return ResponseEntity.ok(service.save(item));
    }
    @GetMapping("")
    public ResponseEntity<List<Item>> all(){
        return ResponseEntity.ok(service.all());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Item>> one(@PathVariable long id){
        System.out.println("Item One Id:"+id);
        return ResponseEntity.ok(service.one(id));

    }
    @PutMapping("/{id}")
    public ResponseEntity<String> edit(@RequestBody Item item, @PathVariable long id){
        return ResponseEntity.ok(service.edit(item));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(service.delete(id));
    }
}
