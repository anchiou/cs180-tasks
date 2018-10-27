package com.tasker.tasker.task;

import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TaskController {
    /*@GetMapping("/task")
    public String getTask() {
        model.addAttribute("task", new Task());
        return "task";
    }*/

    @PostMapping("/addTask")
    public String addTask() {
        return "result"; // TODO: Finish addTask
    }
}