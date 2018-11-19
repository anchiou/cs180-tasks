package com.tasker.backend.service;

import com.tasker.backend.dao.UserListDao;
import com.tasker.backend.entity.UserList;
import com.tasker.backend.entity.UserTask;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserListService {
    static Logger logger = LoggerFactory.getLogger(UserTaskService.class);

    @Autowired
    UserListDao userListDao;

    @Transactional(readOnly = false)
    public int addList(UserList list) {
        logger.info("-------Service addList");
        return userListDao.insert(list);
    }

    public List<UserTask> getTasks(int id) {
        return userListDao.getTasks(id);
    }


    @Transactional(readOnly = false)
    public int renameList(int id, String name) {
        logger.info("-------Service renameList");
        return userListDao.renameList(id, name);
    }
}
