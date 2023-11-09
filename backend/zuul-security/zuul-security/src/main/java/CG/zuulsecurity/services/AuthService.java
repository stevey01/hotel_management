package CG.zuulsecurity.services;

import CG.zuulsecurity.exceptionHandlers.API_requestException;
import CG.zuulsecurity.models.Role;
import CG.zuulsecurity.models.User;
import CG.zuulsecurity.repositories.RoleRepository;
import CG.zuulsecurity.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuthService {
    @Autowired
    private UserRepository ur;
    @Autowired
    private RoleRepository roleRepository;

   
    public List<User> getAllUser(){
        return ur.findAll();
    }
  
    public User getSpecificUser(String name){
        return ur.findAll().stream().filter(x -> x.getFullname().contains(name)).findFirst().get();
    }
   
   
    public List<User> findListbyRole(String role) {
        Role r=roleRepository.findByRole(role);
        Set<Role> roles= new HashSet<>();
        roles.add(r);
        return ur.findByRolesIn(roles);
    }
   }
