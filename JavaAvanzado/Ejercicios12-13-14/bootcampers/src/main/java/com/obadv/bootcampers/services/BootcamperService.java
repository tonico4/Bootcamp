package com.obadv.bootcampers.services;

import com.obadv.bootcampers.models.Bootcamper;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;

@Service
public class BootcamperService {

    private List<Bootcamper> bootcampers = new ArrayList();

    /**
     * El método getAll() devuelve una lista con todos los usuarios.
     * @return
     */

    public List<Bootcamper> getAll() {
        return bootcampers;
    }

    /**
     * El método get() busca un usuario en concreto en función de su nombre. Tenemos que darle como parámetro un String con el nombre que queremos buscar.
     * @param name Nombre del usuario que queremos obtener.
     * @return
     */

    public Bootcamper get(String name) {
        for (Bootcamper bootcamper : bootcampers) {
            if (bootcamper.getName().equalsIgnoreCase(name)) {
                return bootcamper;
            }
        }

        return null;
    }

    /**
     * El método create() nos permite añadir un usuario nuevo en un Array List de éstos.
     * @param bootcamper Usuario que queremos añadir.
     */

    public void create(Bootcamper bootcamper) {
        bootcampers.add(bootcamper);
    }

    /**
     * El método deleteAll() elimina por completo el contenido del Array List de usuarios.
     * @return Este método devuelve un null ya que se vacía el contenido.
     */

    public Response deleteAll() {
        bootcampers.removeAll(bootcampers);

        return null;
    }

}
