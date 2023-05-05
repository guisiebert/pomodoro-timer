import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico!</h1>

            <HistoryList>
                <table>
                    <thead>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </thead>
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                            <Status statusColor='green'> Concluído </Status>
                        </td>
                    </tr>
                    
                    
                </table>

            </HistoryList>
            
        </HistoryContainer>
    )
}