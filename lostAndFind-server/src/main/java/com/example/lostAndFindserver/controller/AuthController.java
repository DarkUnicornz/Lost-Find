package com.example.lostAndFindserver.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.example.lostAndFindserver.model.*;
import com.example.lostAndFindserver.payload.request.OfficerSignupRequest;
import com.example.lostAndFindserver.repository.OfficerRepository;
import com.example.lostAndFindserver.repository.PoliceStationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lostAndFindserver.payload.request.LoginRequest;
import com.example.lostAndFindserver.payload.request.SignupRequest;
import com.example.lostAndFindserver.payload.response.JwtResponse;
import com.example.lostAndFindserver.payload.response.MessageResponse;
import com.example.lostAndFindserver.repository.RoleRepository;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.jwt.JwtUtils;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    OfficerRepository officerRepository;

    @Autowired
    PoliceStationRepository policeStationRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest)
    {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getNic(),
                userDetails.getUsername(),
                userDetails.getfName(),
                userDetails.getlName(),
                userDetails.getEmail(),
                userDetails.getPhone(),
                userDetails.getAddress(),
                userDetails.getbDay(),
                userDetails.getGender(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getNic(),
                signUpRequest.getUsername(),
                signUpRequest.getfName(),
                signUpRequest.getlName(),
                signUpRequest.getEmail(),
                signUpRequest.getPhone(),
                signUpRequest.getAddress(),
                signUpRequest.getbDay(),
                signUpRequest.getGender(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error:User Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error:Admin Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error:Mod Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error:Any Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/officer/signup")
    public ResponseEntity<?> registerOfficer(@Valid @RequestBody OfficerSignupRequest officerSignupRequest) {

        if (officerRepository.existsByUsername(officerSignupRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

//        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
//            return ResponseEntity
//                    .badRequest()
//                    .body(new MessageResponse("Error: Email is already in use!"));
//        }

        // Create new user's account
        Officer officer = new Officer(officerSignupRequest.getNic(),
                officerSignupRequest.getUsername(),
                encoder.encode(officerSignupRequest.getPassword()));

        Set<String> strPolice = officerSignupRequest.getPolice_station();
        Set<Police_Station> police_stations = new HashSet<>();

        if (strPolice == null) {
            Police_Station OfficerPoliceStation = policeStationRepository.findByPoliceStation(EPolice_Station.KARANDENIYA)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            police_stations.add(OfficerPoliceStation);
        } else {
            strPolice.forEach(police_station -> {
                switch (police_station) {
                    case "elpitiya":
                        Police_Station elpitiyaPoliceStation = policeStationRepository.findByPoliceStation(EPolice_Station.ELPITIYA)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        police_stations.add(elpitiyaPoliceStation);

                        break;
                    case "ambalangoda":
                        Police_Station ambalangodaPoliceStation = policeStationRepository.findByPoliceStation(EPolice_Station.AMBALANGODA)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        police_stations.add(ambalangodaPoliceStation);

                        break;
                    default:
                        Police_Station karandeniyaPoliceStation = policeStationRepository.findByPoliceStation(EPolice_Station.KARANDENIYA)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        police_stations.add(karandeniyaPoliceStation);
                }
            });
        }

        officer.setPolice_stations(police_stations);
        officerRepository.save(officer);

        return ResponseEntity.ok(new MessageResponse("Officer registered successfully!"));

    }
}
