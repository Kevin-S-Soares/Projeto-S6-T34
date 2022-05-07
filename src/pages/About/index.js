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

            <h4>Sistemas de filas de distruibuição determinísticos</h4>
            <p>Se são conhecidos os números de chegadas (λ) e atendimentos (μ)  e os instantes de tempo que acontecem, diz-se que o sistema é determinístico.</p>
            
            <h6>D/D/1/K/FIFO</h6>
            <p>O D/D/1/K/FIFO é um sistema de processo de chegada de usuários determinístico; processo de atendimento de usuários determinístico; apenas um canal de atendimento; a capacidade física do sistema é um parâmetro K; e a disciplina de atendimento FIFO, isto é, First in first out, ou seja, os usuários são atendidos de acordo com a ordem de chegada.</p>
            <p>Se o número de chegadas de usuários for maior do que o número de atendimento usuários, não há formação de fila.</p>
            
            <h6>Número de usuários em dado instante:</h6>
            <p>Caso exista um m inteiro que satisfaça a condição: <InlineMath math="\dfrac{1}{\mu} = m\dfrac{1}{\lambda}" /></p>
            <InlineMath math="n(t)=\begin{cases}
            0 &\text{se } t < \dfrac{1}{\lambda} \\ \\
            \Bigg\lfloor t\lambda \Bigg\rfloor - \Bigg\lfloor \Bigg(t - \dfrac{1}{\lambda}\Bigg)\mu\Bigg\rfloor &\text{se } \dfrac{1}{\lambda} \leq t < t_0^*\\ \\
            K &\text{se } t \geq t_0^*
            \end{cases}" />
            <p>Caso não exista um m inteiro que satisfaça a condição: <InlineMath math="\dfrac{1}{\mu} = m\dfrac{1}{\lambda}" /></p>
            <InlineMath math="n(t)=\begin{cases}
            0 &\text{se } t < \dfrac{1}{\lambda} \\ \\
            \Bigg\lfloor t\lambda \Bigg\rfloor - \Bigg\lfloor \Bigg(t - \dfrac{1}{\lambda}\Bigg)\mu\Bigg\rfloor &\text{se } \dfrac{1}{\lambda} \leq t < t_0^*\\ \\
            K-1 \, ou \, K &\text{se } t \geq t_0^*
            \end{cases}" />
            <p>Onde <InlineMath math="t_0^*"/> é o instante da primeira rejeição.</p>

            <h6>Tempo de espera do n-ésimo usuário na fila:</h6>
            <p>Caso exista um m inteiro que satisfaça a condição: <InlineMath math="\dfrac{1}{\mu} = m\dfrac{1}{\lambda}" /></p>
            <InlineMath math="w_q(n)=\begin{cases}
            \Bigg(\dfrac{1}{\mu}-\dfrac{1}{\lambda}\Bigg)\Bigg(n-1\Bigg) &\text{se } n < \lambda t_0^* \\ \\
            \Bigg(K-1\Bigg) \dfrac{1}{\mu} &\text{se } n \geq \lambda t_0^*
            \end{cases}" />
            <br></br>
            <br></br>
            <p>Caso não exista um m inteiro que satisfaça a condição: <InlineMath math="\dfrac{1}{\mu} = m\dfrac{1}{\lambda}" /></p>
            <InlineMath math="w_q(n)=\begin{cases}
            \Bigg(\dfrac{1}{\mu}-\dfrac{1}{\lambda}\Bigg)\Bigg(n-1\Bigg) &\text{se } n < \lambda t_0^* \\ \\
            \text{Não existe expressão geral} &\text{se } n \geq \lambda t_0^*
            \end{cases}" />
            <br></br>
            <br></br>
            <p>Onde <InlineMath math="\lambda t_0^*"/> é ordem da primeira rejeição.</p>

            <h4>Sistemas de filas com distribuições estocásticas</h4>

            <h6>M/M/1/∞/FIFO</h6>
            <p>O M/M/1/∞/FIFO é um sistema de processo de chegada de usuários de distribuição exponencial ou Markoviano; processo de atendimento de usuários de distruibuição exponencial; apenas um canal de atendimento; a capacidade física do sistema é infinita; e a disciplina de atendimento FIFO.</p>
            <h6>Taxa de ocupação / utilização (<InlineMath math="\rho"/>):</h6>
            <InlineMath math="\rho=\dfrac{\lambda}{\mu}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de transição (<InlineMath math="P_n"/>):</h6>
            <InlineMath math="P_n=\dfrac{\lambda^n}{\mu^n}P_0" />
            <br></br>
            <br></br>
            <h6>Probabilidade de estar vazio (<InlineMath math="P_0"/>):</h6>
            <InlineMath math="P_0=1-\rho"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários no sistema (<InlineMath math="L"/>):</h6>
            <InlineMath math="L=\dfrac{\rho}{(1-\rho)}"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários na fila (<InlineMath math="L_q"/>):</h6>
            <InlineMath math="L_q=\dfrac{\rho^2}{(1-\rho)}"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário no sistema (<InlineMath math="W"/>):</h6>
            <InlineMath math="W=\dfrac{1}{\mu - \lambda}"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário na fila (<InlineMath math="W_q"/>):</h6>
            <InlineMath math="W_q=\dfrac{\rho}{\mu - \lambda}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de haver pelo menos k elementos no sistema:</h6>
            <InlineMath math="P(N \geq k)=\rho^k"/>
            <br></br>
            <br></br>
            <h6>Probabilidade do tempo de espera na fila ser maior do que um tempo t:</h6>
            <InlineMath math="W_q(T_q > t)=\rho e^{-(\mu-\lambda)t}"/>
            <br></br>
            <br></br>

            <h6>M/M/1/K/FIFO</h6>
            <p>O M/M/1/K/FIFO é um sistema de processo de chegada de usuários de distribuição exponencial; processo de atendimento de usuários de distruibuição exponencial; apenas um canal de atendimento; a capacidade física do sistema é um parâmetro K; e a disciplina de atendimento FIFO.</p>
            <h6>Taxa de ocupação / utilização (<InlineMath math="\rho"/>):</h6>
            <InlineMath math="\rho=\dfrac{\lambda}{\mu}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de transição (<InlineMath math="P_n"/>):</h6>
            <InlineMath math="P_n=\Bigg(\dfrac{\lambda}{\mu}\Bigg)P_0" />
            <br></br>
            <br></br>
            <h6>Probabilidade de estar vazio (<InlineMath math="P_0"/>):</h6>
            <InlineMath math="P_0=\begin{cases} 
            \dfrac{1}{K+1} &\text{se } \rho=1 \\ \\
            \dfrac{1 - \rho}{1 - \rho^{K+1}} &\text{se } \rho \not = 1 
            \end{cases}"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários no sistema (<InlineMath math="L"/>):</h6>
            <InlineMath math="L=\rho \dfrac{\lbrack 1 + K \rho^{K+1} - \rho^K (K+1) \rbrack}{(1 - \rho)(1 - \rho^{K+1})}"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários na fila (<InlineMath math="L_q"/>):</h6>
            <InlineMath math="L_q=L-1+P_0"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário no sistema (<InlineMath math="W"/>):</h6>
            <InlineMath math="W=\dfrac{L}{\lambda(1 - P_K)}"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário na fila (<InlineMath math="W_q"/>):</h6>
            <InlineMath math="W_q=\dfrac{L_q}{\lambda(1 - P_K)}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de haver pelo menos k elementos no sistema:</h6>
            <InlineMath math="P(N \geq k)=\begin{cases} 
            \dfrac{K+1-k}{K+1} &\text{se } \rho=1 \\ \\
            \rho^k\dfrac{1 - \rho^{K-k+1}}{1 - \rho^{K+1}} &\text{se } \rho \not = 1 
            \end{cases}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade do tempo de espera na fila ser maior do que um tempo t:</h6>
            <InlineMath math="W_q(T_q > t)=\displaystyle\sum_{n = 0}^{K-2}q_{n+1} \displaystyle\sum_{i = 0}^n \dfrac{(\mu t)^i}{i!} e^{-\mu t}"/>
            <br></br>
            <br></br>
            <p>Onde <InlineMath math="q_n = \dfrac{P_n}{1 - P_K} \quad n \le K-1" /> </p>

            <h6>M/M/c/∞/FIFO</h6>
            <p>O M/M/c/∞/FIFO é um sistema de processo de chegada de usuários de distribuição exponencial; processo de atendimento de usuários de distruibuição exponencial; o canal de atendimento é um parâmetro c; a capacidade física do sistema é infinita; e a disciplina de atendimento FIFO.</p>
            <p>Seja <InlineMath math="r=\dfrac{\lambda}{\mu}"/></p>
            <h6>Taxa de ocupação / utilização (<InlineMath math="\rho"/>):</h6>
            <InlineMath math="\rho=\dfrac{r}{c}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de transição (<InlineMath math="P_n"/>):</h6>
            <InlineMath math="P_n=\begin{cases}
            P_0 \dfrac{r^n}{n!} &\text{se } 1 \le n < c \\ \\
            P_0 \dfrac{r^n}{c^{n-c} c!} &\text{se } n \ge c
            \end{cases}
            " />
            <br></br>
            <br></br>
            <h6>Probabilidade de estar vazio (<InlineMath math="P_0"/>):</h6>
            <InlineMath math="P_0=\Bigg({\displaystyle\sum_{n = 0}^{c-1} \dfrac{r^n}{n!}} + \dfrac{cr^c}{c!(c-r)}\Bigg)^{-1}"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários no sistema (<InlineMath math="L"/>):</h6>
            <InlineMath math="L= r + \Bigg\lbrack \dfrac{r^{c+1}c}{c!(c-r)^2} \Bigg\rbrack P_0"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários na fila (<InlineMath math="L_q"/>):</h6>
            <InlineMath math="L_q=\dfrac{P_0cr^{c+1}}{c!(c-r)^2}"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário no sistema (<InlineMath math="W"/>):</h6>
            <InlineMath math="W=\dfrac{1}{\mu} + \Bigg\lbrack \dfrac{r^c\mu}{(c-1)!(c\mu-\lambda)^2} \Bigg\rbrack P_0"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário na fila (<InlineMath math="W_q"/>):</h6>
            <InlineMath math="W_q=\dfrac{r^c\mu}{(c-1)!(c\mu-\lambda)^2}P_0"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de haver pelo menos k elementos no sistema:</h6>
            <InlineMath math="P(N \geq k)= 1 - {\displaystyle\sum_{n = 0}^{k-1}P_n}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade do tempo de espera na fila ser maior do que um tempo t:</h6>
            <InlineMath math="W_q(T_q > t)=P_0\dfrac{r^c}{c!(1 - \rho)}e^{-(c\mu-\lambda)t}"/>
            <br></br>
            <br></br>

            <h6>M/M/c/K/FIFO</h6>
            <p>O M/M/c/K/FIFO é um sistema de processo de chegada de usuários de distribuição exponencial; processo de atendimento de usuários de distruibuição exponencial; o canal de atendimento é um parâmetro c; a capacidade física do sistema é parâmetro K; e a disciplina de atendimento FIFO.</p>
            <p>Seja <InlineMath math="r=\dfrac{\lambda}{\mu}"/></p>
            <h6>Taxa de ocupação / utilização (<InlineMath math="\rho"/>):</h6>
            <InlineMath math="\rho=\dfrac{r}{c}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de transição (<InlineMath math="P_n"/>):</h6>
            <InlineMath math="P_n=\begin{cases}
            P_0 \dfrac{r^n}{n!} &\text{se } 1 \le n \le c-1 \\ \\
            P_0 \dfrac{r^n}{c^{n-c} c!} &\text{se } c \le n \le K
            \end{cases}
            " />
            <br></br>
            <br></br>
            <h6>Probabilidade de estar vazio (<InlineMath math="P_0"/>):</h6>
            <InlineMath math="P_0=\begin{cases}
            {\Bigg\lbrack \displaystyle\sum_{n = 0}^{c-1} \dfrac{r^n}{n!} + \dfrac{r^c(K-c+1)}{c!} \Bigg\rbrack}^{-1} &\text{se } \dfrac{r}{c} = 1 \\ \\
            {\Bigg\lbrack \displaystyle\sum_{n = 0}^{c-1} \dfrac{r^n}{n!} + \dfrac{r^c(1 - {\lbrack \frac{r}{c} \rbrack}^{K-c+1})}{c!(1 - \frac{r}{c})} \Bigg\rbrack}^{-1} &\text{se } \dfrac{r}{c} \not = 1
            \end{cases}" />
            <br></br>
            <br></br>
            <h6>Número médio de usuários no sistema (<InlineMath math="L"/>):</h6>
            <InlineMath math="L= L_q + c + \displaystyle\sum_{n = 0}^{c-1}(n-c)P_n"/>
            <br></br>
            <br></br>
            <h6>Número médio de usuários na fila (<InlineMath math="L_q"/>):</h6>
            <InlineMath math="P_0=\begin{cases}
            \dfrac{P_0r^c}{c!} \dfrac{(K-c+1)(K-c)}{2} &\text{se } \dfrac{r}{c} = 1 \\ \\
            \dfrac{P_0r^{c+1}}{c!c} \dfrac{(\lbrack \frac{r}{c} -1 \rbrack (K-c+1) (\frac{r}{c})^{K-c} + 1 - (\frac{r}{c})^{K-c+1})}{(1-(\frac{r}{c}))^2} &\text{se } \dfrac{r}{c} \not = 1
            \end{cases}" />
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário no sistema (<InlineMath math="W"/>):</h6>
            <InlineMath math="W=\dfrac{L}{\lambda(1 - P_K)}"/>
            <br></br>
            <br></br>
            <h6>Tempo de espera médio de qualquer usuário na fila (<InlineMath math="W_q"/>):</h6>
            <InlineMath math="W_q=\dfrac{L_q}{\lambda(1 - P_K)}"/>
            <br></br>
            <br></br>
            <h6>Probabilidade de haver pelo menos k elementos no sistema:</h6>
            <InlineMath math="P(N \geq k)= 1 - {\displaystyle\sum_{n = 0}^{k-1}P_n}"/>
            <br></br>
            <br></br>
        </div>

    );
}

export default App;