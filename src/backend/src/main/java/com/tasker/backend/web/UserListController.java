package com.tasker.backend.web;

import com.tasker.backend.RestResponse;
import com.tasker.backend.entity.UserList;
import com.tasker.backend.entity.UserTask;
import com.tasker.backend.service.UserListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lists")
public class UserListController {
    static Logger logger = LoggerFactory.getLogger(UserListController.class);

    @Autowired
    UserListService userListService;

    @GetMapping("/{id}")
    public String getTasks(@PathVariable("id") int id) {
        logger.info("----- /lists/{} Controller -----", id);
        String result = "";
        try {
            List<UserTask> data = userListService.getTasks(id);
            result = data.toString();
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to get tasks").toString();
        }
        return new RestResponse(200, "Successfully got tasks").toString();
    }

    @PostMapping
    public String addList(@RequestBody UserList data) {
        logger.info("------ /lists POST Controller -------");
        try {
            int result = userListService.addList(data);
            logger.info("addList-> {}", result);
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to add list").toString();
        }
        return new RestResponse(201, "Successfully added list").toString();
    }

    @PutMapping("/{id}?rename={name}")
    public String renameList(@PathVariable int id, @PathVariable String name) {
        logger.info("----- /lists/{}?rename={} Controller -----", id, name);
        try {
            int result = userListService.renameList(id, name);
            logger.info("addList-> {}", result);
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to rename list").toString();
        }
        return new RestResponse(201, "Successfully renamed list").toString();
    }

}
