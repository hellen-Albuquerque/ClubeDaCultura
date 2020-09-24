package br.com.clubedacultura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

@Entity
@Table (name="tb_produto")
public class Produto {

	@Column (name = "id_produto")
	@Id 
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long id;

	@Column (name= "nome_produto")
	@NotNull
	private String nome;
	
	@Column (name= "descricao_produto")
	
	private String descricao;
	
		
	@Column (name= "tema_produto")
	@NotNull
	private String tema;
	
	@Column (name="img_produto")
	private String imagem;
	
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	
	public String getTema() {
		return tema;
	}

	public void setTema(String tema) {
		this.tema = tema;
	}

		

	
	
}
