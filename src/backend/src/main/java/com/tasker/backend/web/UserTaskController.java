package com.tasker.backend.web;

import com.tasker.backend.RestResponse;
import com.tasker.backend.entity.UserTask;
import com.tasker.backend.service.UserTaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class UserTaskController {
    static Logger logger = LoggerFactory.getLogger(UserTaskController.class);

    @Autowired
    UserTaskService userTaskService;

    @GetMapping
    public String getTask(@RequestParam("id") String id) {
        String result = "";
        try {
            UserTask data = userTaskService.getTask(id);
            result = data.toString();
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            e.printStackTrace();
        }
        return result;
    }

    /*@GetMapping("/tasks?sort=deadline")
    public String sortByDeadline() {
        return "deadlines sorted";
    }

    @GetMapping("/tasks?sort=priority")
    public String sortByPriority() {
        return "priorities sorted";
    }*/


    @PostMapping
    public String addTask(@RequestBody UserTask data) {
        logger.info("---------Controller In post");
        try {
           int result = userTaskService.addTask(data);
           logger.info("addTask -> {}", result);
        } catch (Error e) {
//            return new RestResponse(400, e.getMessage() + "Failed to add task");
            return "Failed to add task";
        }
//        return new RestResponse(201, "Successfully added task");
        return "Successfully added task";

    }

    @PutMapping
    public RestResponse updateTask(String data) {
        try {
            int result = userTaskService.updateTask(data);
            logger.info("updateTask -> {}", result);
        } catch (Error e) {
            return new RestResponse(400, e.getMessage() + "Failed to update task");
        }
        return new RestResponse(201, "Successfully updated task");
    }

    @DeleteMapping
    public RestResponse deleteTask(String id) {
        try {
            userTaskService.deleteTask(id);
        } catch (Error e) {
            return new RestResponse(400, e.getMessage() + "Failed to delete task");
        }
        return new RestResponse(204, "Successfully deleted task");
    }
}