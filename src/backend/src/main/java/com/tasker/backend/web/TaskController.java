package com.tasker.backend.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/tasks")
public class TaskController {
    @GetMapping
    public String getTask() {
        // model.addAttribute("task", new UserTask());
        return "tasks";
    }

   /* @GetMapping("/tasks?sort=deadline")
    public String sortByDeadline() {
        return "deadlines sorted";
    }

    @GetMapping("/tasks?sort=priority")
    public String sortByPriority() {
        return "priorities sorted";
    }*/


    @PostMapping
    public String addTask() {
        return "added";
    }

    @PutMapping
    public String updateTask() {
        return "updated";
    }

    @DeleteMapping
    public String deleteTask() {
        return "deleted";
    }
}