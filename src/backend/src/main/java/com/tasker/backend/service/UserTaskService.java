package com.tasker.backend.service;

import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tasker.backend.dao.UserTaskDao;
import com.tasker.backend.entity.UserTask;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import static java.sql.Date.valueOf;

@Service
public class UserTaskService {
    static Logger logger = LoggerFactory.getLogger(UserTaskService.class);

    @Autowired
    UserTaskDao userTaskDao;

    public UserTask getTask(int id) {
        return userTaskDao.get(id);
    }

    @Transactional(readOnly = false)
    public int addTask(UserTask task) {
        logger.info("-------Service addTask");
        return userTaskDao.insert(task);
    }

    public int updateTask(String data) {
        JSONObject jsonObject = new JSONObject(data);

        int id = jsonObject.getInt("id");
        String name = jsonObject.getString("name");
        boolean status = jsonObject.getBoolean("status");
        Date deadline = valueOf(jsonObject.getString("deadline"));
        int priority = jsonObject.optInt("priority");
        String description = jsonObject.optString("description");
        int listId = jsonObject.getInt("listId");


        UserTask task = new UserTask(id, name, status, deadline, priority, description, listId);
        return userTaskDao.update(task);
    }

    public int deleteTask(int id) {
        return userTaskDao.delete(id);
    }
}
