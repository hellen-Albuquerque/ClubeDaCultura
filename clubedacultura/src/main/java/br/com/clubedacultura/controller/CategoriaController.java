package br.com.clubedacultura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.clubedacultura.model.Categoria;
import br.com.clubedacultura.repository.CategoriaRepository;


@RestController
@RequestMapping ("/categoria")
@CrossOrigin ("*")

public class CategoriaController {
	
	
		@Autowired
		private CategoriaRepository repository;

		@GetMapping // FindAll
		public ResponseEntity <List<Categoria>> ListarCategoria (){
				return ResponseEntity.ok(repository.findAll());
		}
		
		@GetMapping("/{id}") // FindByID
		public ResponseEntity<Categoria> ListarCategoriaPorId(@PathVariable long id) {
			return repository.findById(id) .map(resp -> ResponseEntity.ok(resp)). orElse (ResponseEntity.notFound() .build());
		}
			
		@PostMapping //Insert Categoria
		public ResponseEntity<Categoria> incluirCategoria(@RequestBody Categoria categoria) {
				return ResponseEntity.status(HttpStatus.CREATED) .body(repository.save (categoria));
		}
		@PutMapping // Update Categoria
		public ResponseEntity<Categoria> atualizarCategoria(@RequestBody Categoria categoria) {
				return ResponseEntity.status(HttpStatus.OK) .body(repository.save (categoria));
		}
		@DeleteMapping("/{id}") // Delete
		public void deletarCategoria(@PathVariable long id) {
				repository.deleteById(id);
		}
		
		@GetMapping("/tipo/{tipo}") // FindByName
	    public ResponseEntity<List<Categoria>> BuscarPorTipo(@PathVariable String tipo){
	        return ResponseEntity.ok(repository.findAllByTipoContainingIgnoreCase(tipo));
	    }

	}

