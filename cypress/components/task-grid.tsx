import { TaskStatus, type Task } from "@/types/task";
import "@/app/styles/tw.css";
import { TaskGrid } from "@/components/features/tasks/task-board/task-grid";

describe("<CartGameCard />", () => {
    const tasks = [
        {
            title: "Clean the Frigde",
            description: "Clean the Fridge, get rotten food and drinks out.",
            status: TaskStatus.Todo,
            id: "67db024bacc4def9417b0539",
            user_id: "67db0232acc4def9417b0538",
            user_name: "Ivan Lara",
        },
    ] satisfies Task[];

    beforeEach(() => {
        cy.mount(<TaskGrid tasks={tasks} />);
    });

    it("renders task component", () => {
        cy.get("[data-cy=cart-game-card]").should("exist");
    });

    it("displays the correct tasks grids", () => {
        cy.get("[data-cy=task-card]")
            .first()
            .should("be.visible")
            .and("contain.text", tasks[0].title)
            .and("contain.text", tasks[0].description);
    });
});
