package com.tasker.backend.service;

import com.tasker.backend.dao.UserListDao;
import com.tasker.backend.entity.UserTask;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserListService {
    static Logger logger = LoggerFactory.getLogger(UserTaskService.class);

    @Autowired
    UserListDao listDao;

    public List<UserTask> getTasks(String id) {
        return listDao.getTasks(id);
    }
}
