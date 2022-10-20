package com.obadv.bootcampers.controllers;

import com.obadv.bootcampers.models.Bootcamper;
import com.obadv.bootcampers.services.BootcamperService;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

/**
 * Esta clase contiene todos los métodos de la API Rest de la aplicación.
 */

@Component
@Path("/")
public class BootcamperController {

    private BootcamperService bootcamperService;

    public BootcamperController(BootcamperService bootcamperService) {
        this.bootcamperService = bootcamperService;

        // Prefabricados para que la lista no quede vacía
        this.bootcamperService.create(new Bootcamper("Toni", "García"));
        this.bootcamperService.create(new Bootcamper("José", "Martinez"));

    }

    @GET
    @Path("/bootcampers")
    @Produces("application/json")
    public List<Bootcamper> listarTodos() {
        return bootcamperService.getAll();
    }

    @GET
    @Path("/bootcampers/{name}")
    @Produces("application/json")
    public Bootcamper listarNombre(@PathParam("name") String name) {
        return bootcamperService.get(name);
    }

    @POST
    @Path("/bootcampers")
    @Produces("application/json")
    @Consumes("application/json")
    public Response crearBootcamper(Bootcamper bootcamper) {
        bootcamperService.create(bootcamper);

        return Response.created(URI.create("/bootcampers/" + bootcamper.getName())).build();
    }

    @DELETE
    @Path("/bootcampers")
    public Response borrarTodo() {
        bootcamperService.deleteAll();

        return Response.noContent().build();
    }

}
