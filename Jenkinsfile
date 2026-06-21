pipeline {
	agent any
		stages {
			stage('hello') {
				steps{
					withCredentials([
						usernamePassword(credentialsId:'github-login', usernameVariable:'USER', passwordVariable:'PASS'),
                        sshUserPrivateKey(credentialsId:'ssh-key', keyFileVariable:'KEY', usernameVariable:'SSHUSER')
						string(credentialsId:'demo-khoa-bi-mat', variable:'TOKEN')
					]) {
						echo " ${USER} - ${PASS} - ${KEY} - ${SSHUSER} - ${TOKEN} "
					    }
					}
						    }
				}
		}