// package com.example.lostAndFindserver.service;

// import com.example.lostAndFindserver.model.LostFoundItemModel;
// import com.example.lostAndFindserver.repository.LostFoundItemRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class LostFoundItemService {

//    @Autowired
//    private LostFoundItemRepository lostFoundItemRepository;

// <<<<<<< HEAD
//    public String savePost(LostFoundItemModel lostFoundItemModel){
//        lostFoundItemRepository.save(lostFoundItemModel);
//        return "Success";
// =======
//    public LostFoundItemModel savePost(LostFoundItemModel lostFoundItemModel){
//        return lostFoundItemRepository.save(lostFoundItemModel);
// >>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c
//    }
// }
package com.example.lostAndFindserver.service;

//import com.example.lostAndFindserver.model.FoundItem;
import com.example.lostAndFindserver.model.LostFoundItemModel;
//import com.example.lostAndFindserver.repository.FoundItemRepository;
import com.example.lostAndFindserver.repository.LostFoundItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LostFoundItemService {

    @Autowired
    private LostFoundItemRepository lostFoundItemRepository;

    public LostFoundItemModel saveLostPost(LostFoundItemModel lostFoundItemModel) {
       return lostFoundItemRepository.save(lostFoundItemModel);
    }

//    @Autowired
//    private FoundItemRepository foundItemRepository;

    public LostFoundItemModel saveFoundPost (LostFoundItemModel lostFoundItemModel) {
        return lostFoundItemRepository.save(lostFoundItemModel);
    }

    public List<LostFoundItemModel> getAllLostPost() {
        String flag = "lost";
        return lostFoundItemRepository.findByFlag(flag);
    }
}
