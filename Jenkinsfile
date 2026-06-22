pipeline {
	agent any

    environment {
        IP_SERVER = '157.245.150.161'
        DEPLOY_PATH = '/root/my-project/'
    }
		stages {
			stage ('Restart Container') {
				steps {
					withCredentials([
                        sshUserPrivateKey(credentialsId:'ssh-key', keyFileVariable:'KEY', usernameVariable:'USER'),
					]) 
					{
                        sh """
                            ssh -o StrictHostKeyChecking=no -i ${KEY} ${USER}@${IP_SERVER} '
                                cd ${DEPLOY_PATH} && git pull
                                docker-compose down
                                docker-compose build
                                docker-compose up -d
                            '
                        """
					}
				    }
            }
		}
}