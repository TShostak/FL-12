let $email = prompt('Enter your email', '');
let $userEmail = 'user@gmail.com';
let $adminEmail = 'admin@gmail.com';
let $userPass = 'UserPass';
let $adminPass = 'AdminPass';
const $emailMinChar = 5;
const $passMinChar = 6;

if ( !$email ) {
	alert('Canceled');
} else if ( $email.length < $emailMinChar ) {
	alert('I don’t know any emails having name length less than 5 symbols');
} else if ( $email === 'user@gmail.com' || $email === 'admin@gmail.com') {
	let $currentPassword = prompt('Enter your password', '');
	if ( !$currentPassword ) {
		alert('Canceled');
	}
	if ( $email === $userEmail && $currentPassword === $userPass || 
		$email === $adminEmail && $currentPassword === $adminPass ) {		
		let $changePasswordConfirm = confirm('Do you want to change your password?');
		if ( $changePasswordConfirm ) {
			let $oldPassword = prompt('Enter your OLD password', '');
			if ( $oldPassword === $currentPassword ) {
				let $newPassword = prompt('Enter your NEW password', '');
				if ( !$newPassword ) {
					alert('Canceled');
				} else if ( $newPassword.length < $passMinChar ) {
					alert('It’s too short password. Sorry.');
				} else {
					let $newPassConfirm = prompt('Enter your NEW password AGAIN', '');
					if ( $newPassConfirm === $newPassword ) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.')
					}
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}
