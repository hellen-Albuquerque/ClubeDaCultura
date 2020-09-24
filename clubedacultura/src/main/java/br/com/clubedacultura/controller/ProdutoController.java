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
import br.com.clubedacultura.model.Produto;
import br.com.clubedacultura.repository.ProdutoRepository;
@RestController
@RequestMapping ("/produto")
@CrossOrigin ("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;

	@GetMapping // FindAll
	public ResponseEntity <List<Produto>> ListarProduto (){
			return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}") // FindByID
	public ResponseEntity<Produto> ListarProdutoPorId(@PathVariable long id) {
		return repository.findById(id) .map(resp -> ResponseEntity.ok(resp)). orElse (ResponseEntity.notFound() .build());
	}
		
	@PostMapping //Insert Produto
	public ResponseEntity<Produto> incluirProduto(@RequestBody Produto produto) {
			return ResponseEntity.status(HttpStatus.CREATED) .body(repository.save (produto));
	}
	@PutMapping // Update Produto
	public ResponseEntity<Produto> atualizarProduto(@RequestBody Produto produto) {
			return ResponseEntity.status(HttpStatus.OK) .body(repository.save (produto));
	}
	@DeleteMapping("/{id}") // Delete
	public void deletarProduto(@PathVariable long id) {
			repository.deleteById(id);
	}
	@GetMapping("/nome/{nome}") // FindByName
    public ResponseEntity<List<Produto>> BuscarPorNome(@PathVariable String nome){
        return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
    }

}
