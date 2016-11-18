def pipeline
node {
	ws {
		git url: 'git@github.com:triptease/groovy.git', credentialsId: '34e4fcf0-3fbc-44a3-8342-0a823bf18483', changelog: false, poll: false
		pipeline = load 'workflows/docker-kubernetes.groovy'
	}
}

def projectMap = [
	github_name: 'philwhiteuk/hello',
	deployTimeout: 180,
	dockerhub_name: 'philwhiteuk/hello',
	kubernetes_app_name: 'hello-world',
]

stage name: 'build'
	pipeline.build(projectMap)

stage name: 'test'
	pipeline.runTests(projectMap, 'run test', '--entrypoint=/usr/bin/npm -e NODE_ENV=test')
	pipeline.publish(projectMap)

stage name: 'deploy'
	pipeline.manualSignOff()
	pipeline.deploy(projectMap, 'development')
