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
    public String getTask(@RequestParam("id") int id) {
        logger.info("------ /tasks GET Controller -------");
        String result = "";
        try {
            UserTask data = userTaskService.getTask(id);
            result = data.toString();
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to get task", result).toString();
        }
        return new RestResponse(200, "Successfully got task", result).toString();
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
        logger.info("------ /tasks POST Controller -------");
        try {
            int result = userTaskService.addTask(data);
            logger.info("addTask -> {}", result);
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to add task", null).toString();
        }
        return new RestResponse(201, "Successfully added task", null).toString();
    }

    @PutMapping
    public String updateTask(String data) {
        logger.info("------ /tasks PUT Controller -------");
        try {
            int result = userTaskService.updateTask(data);
            logger.info("updateTask -> {}", result);
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to add task", null).toString();
        }
        return new RestResponse(201, "Successfully added task", null).toString();
    }

    @DeleteMapping
    public String deleteTask(@RequestParam("id") int id) {
        logger.info("------ /tasks DELETE Controller -------");
        try {
            int result = userTaskService.deleteTask(id);
            logger.info("deleteTask -> {}", result);
        } catch (Error e) {
            logger.error("Error: {}\n{}", e.getMessage(), e.getStackTrace());
            return new RestResponse(400, e.getMessage() + "Failed to delete task", null).toString();
        }
        return new RestResponse(204, "Successfully deleted task", null).toString();
    }
}