// Titre : La liste de tâches
// Challenge : Créer une liste de tâches avec la possibilité d'ajouter, modifier et supprimer une tâche

//Correction :

// Tableau pour stocker les tâches
let tasks = [];

// Fonction pour ajouter une nouvelle tâche
function addTask() {

    let newTask = document.getElementById("new-task").value;

    tasks.push(newTask);
    refreshTaskList();
}

// Fonction pour supprimer une tâche
function deleteTask(index) {
    // Supprimer la tâche du tableau
    tasks.splice(index, 1);

    // Rafraîchir la liste de tâches
    refreshTaskList();
}

// Fonction pour modifier une tâche
function editTask(index) {
    // Demander à l'utilisateur la nouvelle valeur de la tâche
    let newTaskValue = prompt("Entrez la nouvelle valeur de la tâche :");

    // Modifier la tâche dans le tableau
    tasks[index] = newTaskValue;

    // Rafraîchir la liste de tâches
    refreshTaskList();
}

// Fonction pour rafraîchir la liste de tâches affichée
function refreshTaskList() {
    // Récupérer l'élément ul pour la liste de tâches
    let taskList = document.getElementById("task-list");

    // Vider la liste de tâches existante
    taskList.innerHTML = "";

    // Parcourir le tableau de tâches et ajouter chaque tâche à la liste
    for (let i = 0; i < tasks.length; i++) {
        // Créer un nouvel élément li pour chaque tâche
        let taskItem = document.createElement("li");

        // Ajouter le texte de la tâche à l'élément li
        taskItem.innerText = tasks[i];

        // Ajouter les boutons pour supprimer et modifier la tâche
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Supprimer";
        deleteButton.onclick = function() { deleteTask(i); };
        taskItem.appendChild(deleteButton);

        let editButton = document.createElement("button");
        editButton.innerText = "Modifier";
        editButton.onclick = function() { editTask(i); };
        taskItem.appendChild(editButton);

        // Ajouter l'élément li à la liste de tâches
        taskList.appendChild(taskItem);
    }
}