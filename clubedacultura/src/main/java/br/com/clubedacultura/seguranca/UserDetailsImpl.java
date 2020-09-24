package br.com.clubedacultura.seguranca;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.clubedacultura.model.Usuario;

public class UserDetailsImpl implements UserDetails {

	private String userName; 
	
	private String password; 
	
	private String tipo;
	
	private List<GrantedAuthority> authorities;
	
	private static final long serialVersionUID = 1L;
	
	public UserDetailsImpl (Usuario user) {
		this.userName = user.getEmail();
		this.password = user.getSenha();
		this.tipo = user.getTipo();
	}
	
	public UserDetailsImpl () {}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userName;
	}
	

	public String getTipo() {
		// TODO Auto-generated method stub
		return tipo;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
