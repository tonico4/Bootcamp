package com.obadv.bootcampers.services;

import com.obadv.bootcampers.models.Bootcamper;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;

@Service
public class BootcamperService {

    private List<Bootcamper> bootcampers = new ArrayList();

    public List<Bootcamper> getAll() {
        return bootcampers;
    }

    public Bootcamper get(String name) {
        for (Bootcamper bootcamper : bootcampers) {
            if (bootcamper.getName().equalsIgnoreCase(name)) {
                return bootcamper;
            }
        }

        return null;
    }

    public void create(Bootcamper bootcamper) {
        bootcampers.add(bootcamper);
    }

    public Response deleteAll() {
        bootcampers.removeAll(bootcampers);

        return null;
    }

}
