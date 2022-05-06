import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function App(){
    return(
        <div>
            <h4>O que é a ferramenta?</h4>
            <p>É uma ferramenta de visualização de Teoria das Filas.</p>
            <p>Inspirado no <a href="https://www.amazon.com.br/Teoria-Filas-Maria-Cristina-Fogliatti/dp/8571931577/">livro</a> homônimo</p>
            
            <h4>Sobre o projeto</h4>
            <p>Segundo o livro mencionado, Teoria das filas é uma "modelagem analítica de processos ou sistemas que resultam em espera e tem como objetivo determinar e avaliar quantidades, denominadas medidas de desempenho, que expressam a produtividade / operacionalidade desses processos".</p>
            <p>Este projeto representará sistemas com filas em regime estacionário, isto é, um sistema onde as medidas são estáveis e podem ser usadas para avaliar o sistema.</p>
            
            <h4>Notação de sistemas com filas</h4>
            <p>Este projeto usará a notação proposta por Kendall, que usa a forma A/B/C/D/E, onde A e B representam respectivamente as distribuições de chegadas sucessivas e de atendimento; C e D representam respectivamente os canais ou postos de atendimento / serviço e a capacidade física do sistema; e E representa a disciplina de atendimento.</p>
            
            <h6>Processo de chegada dos usuários e de atendimento dos usuários</h6>
            <p>Segundo o livro, o processo de chegada dos usuários é "especificado pelo comportamento do fluxo de chegadas dos mesmos". Representado pelo parâmetro taxa de chegada.</p>
            <p>Já o processo de atendimento é "especificado pelo comportamento do fluxo de usuários atendidos". Representado pelo parâmetro taxa de atendimento.</p>
            
            <h6>Canais ou postos de atendimento / serviço</h6>
            <p>Canais ou postos de atendimento / serviço são "os locais onde são atendidos os usuários".</p>

            <h6>Capacidade física do sistema</h6>
            <p>A capacidade física do sistema é "o número máximo de usuários que o sistema comporta".</p>

            <h6>Disciplina de atendimento</h6>
            <p>A disciplina de atendimento, é "o critério estabelecido pela gerência do sistema, segundo o qual os usuários que se encontram na fila são atendidos quando um posto fica disponível".</p>

            <h4>Sistemas de filas determinísticos</h4>
            <p>Se são conhecidos os números de chegadas (λ) e atendimentos (μ)  e os instantes de tempo que acontecem, diz-se que o sistema é determinístico.</p>
            
            <h6>D/D/1/K/FIFO</h6>
            <p>O D/D/1/K/FIFO é um sistema de processo de chegada de usuários determinístico; processo de atendimento de usuários determinístico; apenas um canal de atendimento; a capacidade é um paramêtro K; e a disciplina de atendimento FIFO, isto é, First in first out, ou seja, os usuários são atendidos de acordo com a ordem de chegada.</p>
            <p>Se o número de chegadas de usuários for maior do que o número de atendimento usuários, não há formação de fila.</p>
            <h6>Número de usuários em dado instante:</h6>
            <p>Caso exista um m inteiro que satisfaça a condição: <InlineMath math="\frac{1}{\mu} = m\frac{1}{\lambda}" /></p>
            <InlineMath math="n(t)=\begin{cases}
            0 &\text{se } t < \frac{1}{\lambda} \\
            \lfloor t\lambda \rfloor - \lfloor (t - \frac{1}{\lambda})\mu\rfloor &\text{se } \frac{1}{\lambda} \eqslantless t < t_0^*\\
            K &\text{se } t \eqslantgtr t_0^*
            \end{cases}" />
            <p>Caso não exista um m inteiro que satisfaça a condição: <InlineMath math="\frac{1}{\mu} = m\frac{1}{\lambda}" /></p>
            <InlineMath math="n(t)=\begin{cases}
            0 &\text{se } t < \frac{1}{\lambda} \\
            \lfloor t\lambda \rfloor - \lfloor (t - \frac{1}{\lambda})\mu\rfloor &\text{se } \frac{1}{\lambda} \eqslantless t < t_0^*\\
            K-1 \, ou \, K &\text{se } t \eqslantgtr t_0^*
            \end{cases}" />
            <p>Onde <InlineMath math="t_0^*"/> é o instante da primeira rejeição.</p>

            <h6>Tempo de espera do n-ésimo usuário na fila:</h6>
            <p>Caso exista um m inteiro que satisfaça a condição: <InlineMath math="\frac{1}{\mu} = m\frac{1}{\lambda}" /></p>
            <InlineMath math="w_q(n)=\begin{cases}
            (\frac{1}{\mu}-\frac{1}{\lambda})(n-1) &\text{se } n < \lambda t_0^* \\
            (K-1) \frac{1}{\mu} &\text{se } n \eqslantgtr \lambda t_0^*\\
            \end{cases}" />
            <br></br>
            <br></br>
            <p>Caso não exista um m inteiro que satisfaça a condição: <InlineMath math="\frac{1}{\mu} = m\frac{1}{\lambda}" /></p>
            <InlineMath math="w_q(n)=\begin{cases}
            (\frac{1}{\mu}-\frac{1}{\lambda})(n-1) &\text{se } n < \lambda t_0^* \\
            Não \, existe \, expressão \, geral &\text{se } n \eqslantgtr \lambda t_0^*\\
            \end{cases}" />
            <br></br>
            <br></br>
            <p>Onde <InlineMath math="\lambda t_0^*"/> é ordem da primeira rejeição.</p>

            <h4>Sistemas de filas com distribuições estocásticas</h4>
            <h6>M/M/1/∞/FIFO</h6>
            <h6>M/M/1/K/FIFO</h6>
            <h6>M/M/C/∞/FIFO</h6>
            <h6>M/M/C/K/FIFO</h6>
        </div>

    );
}

export default App;