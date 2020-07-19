package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

public class OfficerSignupRequest {

    @NotBlank
    @Size(max = 20)
    private String nic;

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    private Set<String> police_station;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<String> getPolice_station() {
        return police_station;
    }

    public void setPolice_station(Set<String> police_station) {
        this.police_station = police_station;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
