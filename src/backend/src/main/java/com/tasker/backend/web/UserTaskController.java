package com.tasker.backend.web;

import com.tasker.backend.RestResponse;
import com.tasker.backend.service.UserTaskService;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/tasks")
public class UserTaskController {
    static Logger logger = LoggerFactory.getLogger(UserTaskController.class);

    @Autowired
    UserTaskService userTaskService;

    /*@GetMapping
    public String getTask() {
        try {
            userTaskService.getTask();
        } catch (IOException e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            e.printStackTrace();
        }
        return "tasks";
    }

    @GetMapping("/tasks?sort=deadline")
    public String sortByDeadline() {
        return "deadlines sorted";
    }

    @GetMapping("/tasks?sort=priority")
    public String sortByPriority() {
        return "priorities sorted";
    }*/


    @PostMapping
    public RestResponse addTask(@RequestParam JSONObject data) {
        try {
           userTaskService.addTask(data);
        } catch (Error e) {
            return new RestResponse(400, e.getMessage() + "Failed to add task");
        }
        return new RestResponse(201, "Successfully added task");
    }

    @PutMapping
    public RestResponse updateTask(JSONObject data) {
        try {
            userTaskService.updateTask(data);
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