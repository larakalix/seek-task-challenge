import { TaskStatus, type Task } from "@/types/task";
import "@/app/styles/tw.css";
import { TaskCard } from "@/components/features/tasks/task-board/task-card";

describe("<CartGameCard />", () => {
    const task = {
        title: "Clean the Frigde",
        description: "Clean the Fridge, get rotten food and drinks out.",
        status: TaskStatus.Todo,
        id: "67db024bacc4def9417b0539",
        user_id: "67db0232acc4def9417b0538",
        user_name: "Ivan Lara",
    } satisfies Task;

    beforeEach(() => {
        cy.mount(<TaskCard task={task} />);
    });

    it("renders task component", () => {
        cy.get("[data-cy=cart-game-card]").should("exist");
    });

    it("displays the correct task title and description", () => {
        cy.get("[data-cy=task-title]")
            .should("be.visible")
            .and("contain.text", task.title);

        cy.get("[data-cy=task-description]")
            .should("be.visible")
            .and("contain.text", task.description);
    });
});
