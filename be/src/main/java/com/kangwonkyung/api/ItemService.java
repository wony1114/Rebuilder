package com.kangwonkyung.api;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    String save(Item item);
    List<Item> all();
    Optional<Item> one(long id);
    String edit(Item item);
    String delete(long id);
}
