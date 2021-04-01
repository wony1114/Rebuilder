package com.kangwonkyung.api;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{
    private final ItemRepository itemRepo;
    @Override
    public String save(Item item) {
        return (itemRepo.save(item) != null) ? "SUCCESS" : "FAILURE";
    }

    @Override
    public List<Item> all() {
        return itemRepo.findAll();
    }

    @Override
    public Optional<Item> one(long id) {
        return itemRepo.findById(id);
    }

    @Override
    public String edit(Item item) {
        return (itemRepo.save(item) != null)? "SUCCESS" : "FAILURE";
    }

    @Override
    public String delete(long id) {
        itemRepo.deleteById(id);
        return "SUCCESS";
    }
}
